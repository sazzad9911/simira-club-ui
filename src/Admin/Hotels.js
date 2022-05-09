import React from 'react';
import './css/Hotels.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useSelector, useDispatch } from 'react-redux';
import { Oval } from "react-loader-spinner";
import { postData, url, setAction } from '../action'
import app from '../firebase';
import { getAuth } from 'firebase/auth';
import axios from 'axios';

const Hotels = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    const [category, setCategory] = React.useState('');
    const dispatch = useDispatch()
    const Hotels = useSelector(state => state.Hotels)
    const action = useSelector(state => state.pageSettings.action)
    const [imageLoading, setImageLoading] = React.useState(false)
    const auth = getAuth(app)
    const [HotelName, setHotelName] = React.useState()
    const [HotelAddress, setHotelAddress] = React.useState()
    const [CheckIn, setCheckIn] = React.useState()
    const [CheckOut, setCheckOut] = React.useState()
    const [Description, setDescription] = React.useState()
    const [Image, setImage] = React.useState()
    const [Tv, setTv] = React.useState(true)
    const [Wifi, setWifi] = React.useState(false)
    const [Parking, setParking] = React.useState(false)
    const [Loading, setLoading] = React.useState(false)

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const newPhoto = (e, id) => {
        setImageLoading(true)
        const data = new FormData()
        data.append('file', e.target.files[e.target.files.length - 1])
        axios.post(url + "/upload", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
                if (res.status == 200) {
                    postData(url + '/setData', {
                        auth: auth.currentUser,
                        tableName: 'hotel_photos',
                        columns: ['url', 'hotel_id'],
                        values: [url + "/" + res.data.originalname, id]
                    }).then(res => {
                        console.log(res);
                        setImageLoading(false)
                        dispatch(setAction(!action))
                    })
                }
            })
    }
    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    const saveHotel = () => {
        setLoading(true)
        let conditions = Tv ? "tv," : "" + Wifi ? "wifi," : "" + Parking ? "parking" : "";
        const data = new FormData()
        data.append('file', Image)
        axios.post(url + "/upload", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
                if (res.status == 200) {
                    postData(url + '/setData', {
                        auth: auth.currentUser,
                        tableName: 'hotels',
                        columns: ['name', 'address', 'type', 'date',
                            'popularity', 'image', 'ratings', 'check_in', 'check_out', 'conditions',
                            'discount', 'description', 'categories'],
                        values: [HotelName, HotelAddress, 'Free For Members', convertDate(new Date())
                            , 0, url + "/" + res.data.originalname, 0, CheckIn, CheckOut, conditions, 
                            0, Description, category]
                    }).then(res => {
                        if(res.message){
                            console.log(res.message);
                        }
                        setImageLoading(false)
                        dispatch(setAction(!action))
                    })
                }
            })
    }
    return (
        <div className='page-settings'>
            <h3 style={{ textAlign: 'center' }}>Your Saves Hotels</h3>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenDiv(!openDiv)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }}>
                        <AddCircleIcon />
                        Add New Hotel
                    </Button>
                </div>
                {
                    openDiv ? (
                        Loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className='add-hotels'>
                                <div style={{ width: '50%' }}>
                                    <TextField onChange={(e) => setHotelName(e.target.value)}
                                        style={styles.inputs}
                                        id="name" label="Hotel Name" variant="standard" />
                                    <TextField onChange={(e) => setHotelAddress(e.target.value)} style={styles.inputs}
                                        id="address" label="Hotel Address" variant="standard" />
                                    <TextField onChange={(e) => setCheckIn(e.target.value)} style={styles.inputs}
                                        id="check_in" label="Check In Time" variant="standard" />
                                    <TextField onChange={(e) => setCheckOut(e.target.value)} style={styles.inputs}
                                        id="check_out" label="Check Out Time" variant="standard" />
                                    <TextField onChange={(e) => setDescription(e.target.value)} style={styles.inputs} multiline
                                        rows={4}
                                        id="description" label="Hotel Description" variant="standard" />
                                </div>
                                <div style={{ width: '45%', marginLeft: '5%' }}>
                                    <label>Add Photo</label><br />
                                    <input onChange={(e) => setImage(e.target.files[e.target.files.length - 1])} name="file" type="file" /><br />
                                    <FormGroup>
                                        <label style={{ marginTop: '30px' }}>Conditions:</label>
                                        <FormControlLabel control={<Checkbox checked={Tv}
                                            onChange={(e) => setTv(e.target.checked)} />} label="TV" />
                                        <FormControlLabel control={<Checkbox checked={Wifi}
                                            onChange={(e) => setWifi(e.target.checked)} />
                                        } label="Wifi" />
                                        <FormControlLabel control={<Checkbox checked={Parking}
                                            onChange={(e) => setParking(e.target.checked)} />} label="Parking" />
                                    </FormGroup>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={category}
                                            onChange={handleChange}
                                            label="Select Category"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'villas'}>Villas</MenuItem>
                                            <MenuItem value={'deluxe'}>Deluxe</MenuItem>
                                            <MenuItem value={'farm-house'}>Firm House</MenuItem>
                                        </Select>
                                    </FormControl><br />
                                    <Button onClick={saveHotel} style={{ marginTop: '10px' }} variant='contained'>Save Changes</Button>
                                </div>
                            </div>
                        )
                    ) : (
                        <></>
                    )
                }
            </div>
            {
                Hotels ? (
                    Hotels.map((d, i) => (
                        <div key={i} className='page-div'>
                            <p>{i+ 1}</p>
                            <img src={d.image} />
                            <p>{d.name}</p>
                            {
                                imageLoading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <label htmlFor={"new"+d.id}>
                                        <input onChange={(e) => newPhoto(e, d.id)} name='file' style={{ display: 'none' }} accept="image/*" id={"new"+d.id} type="file" />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                )
                            }
                            <Button onClick={() => {
                                postData(url + '/deleteData', {
                                    tableName: 'hotels',
                                    condition: "id=" + d.id
                                }).then((data) => {
                                    //console.log(data);
                                    dispatch(setAction(!action))
                                })
                            }} style={{ margin: '5px', width: '200px', height: '40px' }}
                                variant="outlined" >
                                <DeleteIcon />
                                Delete
                            </Button>
                        </div>
                    ))
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Oval color="#FC444B" height={80} width={80} />
                    </div>
                )
            }
        </div>
    );
};

export default Hotels;
const styles = {
    inputs: {
        margin: '2%',
        width: '96%',
    }
}