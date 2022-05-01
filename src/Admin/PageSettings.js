import React from 'react';
import './css/PageSettings.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useSelector, useDispatch } from 'react-redux'
import { Oval } from "react-loader-spinner";
import { postData, url, setAction } from '../action'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import app from '../firebase';
import { getAuth } from 'firebase/auth';

const PageSettings = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    const dispatch = useDispatch()
    const Banners = useSelector(state => state.Banners)
    const action = useSelector(state => state.pageSettings.action)
    const [ImageName, setImageName] = React.useState()
    const [Image, setImage] = React.useState()
    const auth = getAuth(app)
    const [Loading, setLoading] = React.useState(false)


    const onClickHandler = () => {
        setLoading(true)
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
                        tableName: 'slider',
                        columns: ['name', 'url', 'image'],
                        values: [ImageName, 'none', url + "/" + res.data.originalname]
                    }).then(res => {
                        console.log(res);
                        setLoading(false)
                        dispatch(setAction(!action))
                    })
                }
            })
    }
    return (
        <div className='page-settings'>
            <h3>Page Banners</h3>
            <div  className='page-add'>
                <div style={{width:'100%',justifyContent: 'center'}} onClick={() => {
                    setOpenDiv(!openDiv)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }}>
                        <AddCircleIcon />
                        Add More Banner
                    </Button>
                </div>
                {
                    openDiv ? (
                        <div>
                            {
                                Loading ? (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '100%'
                                    }}>
                                        <Oval color="#FC444B" height={80} width={80} />
                                    </div>
                                ) : (
                                    <div className='add-banners'>
                                        <TextField onChange={
                                            (e) => {
                                                setImageName(e.target.value)
                                            }} style={{ marginBottom: '10px' }} id="name" label="Image Name" variant="standard" /><br />
                                        <label>Add Photo</label><br />
                                        <input name='file' onChange={(e) => setImage(e.target.files[e.target.files.length - 1])} type="file" /><br />
                                        <Button onClick={onClickHandler} variant='contained'>Save Changes</Button>
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            {
                Banners ? (
                    Banners.map((d, i) => (
                        <div key={i} className='page-div'>
                            <p>{i + 1}</p>
                            <img src={d.image} />
                            <p>{d.name} </p>
                            <Button onClick={() => {
                                postData(url + '/deleteData', {
                                    tableName: 'slider',
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
        </div >
    );
};

export default PageSettings;