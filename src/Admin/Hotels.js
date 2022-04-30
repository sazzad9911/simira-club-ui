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

const Hotels = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
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
                        <div className='add-hotels'>
                            <div style={{ width: '50%' }}>
                                <TextField style={styles.inputs}
                                    id="name" label="Hotel Name" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="address" label="Hotel Address" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="check_in" label="Check In Time" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="check_out" label="Check Out Time" variant="standard" />
                                <TextField style={styles.inputs} multiline
                                    rows={4}
                                    id="description" label="Hotel Description" variant="standard" />
                            </div>
                            <div style={{ width: '45%', marginLeft: '5%' }}>
                                <label>Add Photo</label><br />
                                <input type="file" /><br />
                                <Button variant='contained'>Save Changes</Button>
                                <FormGroup>
                                    <label style={{ marginTop: '30px' }}>Conditions:</label>
                                    <FormControlLabel control={<Checkbox  defaultChecked />} label="TV" />
                                    <FormControlLabel control={<Checkbox />} label="Wifi" />
                                    <FormControlLabel control={<Checkbox />} label="Parking" />
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
                                        <MenuItem  value={'deluxe'}>Deluxe</MenuItem>
                                        <MenuItem  value={'farm-house'}>Firm House</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className='page-div'>
                <p>1</p>
                <img src={'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                <p>Lorem Ipsum is simply dummy text of </p>
                <label htmlFor="icon-button-file">
                    <input style={{display:'none'}} accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <Button style={{ margin: '5px', width: '200px', height: '40px' }}
                    variant="outlined" >
                    <DeleteIcon />
                    Delete
                </Button>
            </div>
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