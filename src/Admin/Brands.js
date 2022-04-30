import React from 'react';
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

const Brands = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setCategory(event.target.value);
    }
    return (
        <div className='page-settings'>
            <h3 style={{ textAlign: 'center' }}>Your Brands And Deals</h3>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenDiv(!openDiv)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }} >
                        <AddCircleIcon />
                        Add New Brand
                    </Button>
                </div>
                {
                    openDiv ? (
                        <div className='add-hotels'>
                            <div style={{ width: '50%' }}>
                                <TextField style={styles.inputs}
                                    id="name" label="Brand Name" variant="standard" />
                            </div>
                            <div style={{ width: '45%', marginLeft: '5%' }}>
                                <label>Add Photo</label><br />
                                <input type="file" /><br />
                                <Button style={{ marginBottom: '20px' }} variant='contained'>Save Changes</Button>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenSecond(!openSecond)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }} >
                        <AddCircleIcon />
                        Add New Deals
                    </Button>
                </div>
                {
                    openSecond ? (
                        <div className='add-hotels'>
                            <div style={{ width: '50%' }}>
                                <TextField style={styles.inputs}
                                    id="name" label="Hotel Name" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="discount" label="Discount %" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="conditions" label="Terms & Conditions" variant="standard"
                                    multiline
                                    rows={4} />
                            </div>
                            <div style={{ width: '45%', marginLeft: '5%' }}>
                                <label>Add Photo</label><br />
                                <input type="file" /><br />
                                <Button style={{ marginBottom: '20px' }} variant='contained'>Save Changes</Button>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox value={open} onChange={() => {
                                        setOpen(!open);
                                    }} />} label="Discount Code?" />
                                    {
                                        open ? (
                                            <TextField style={styles.inputs}
                                                id="code" label="Code" variant="standard" />
                                        ) : (
                                            <></>
                                        )
                                    }
                                </FormGroup>
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
                <Button style={{ margin: '5px',width:'200px',height:'40px' }} 
                variant="outlined" >
                    <DeleteIcon />
                     Delete
                </Button>
            </div>
        </div>
    );
};

export default Brands;
const styles = {
    inputs: {
        margin: '2%',
        width: '96%',
    }
}