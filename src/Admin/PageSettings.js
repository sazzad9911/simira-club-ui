import React from 'react';
import './css/PageSettings.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const PageSettings = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    return (
        <div className='page-settings'>
            <h3>Page Banners</h3>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenDiv(!openDiv)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px',width: '260px'}}>
                        <AddCircleIcon />
                        Add More Banner
                    </Button>
                </div>
                {
                    openDiv ? (
                        <div className='add-banners'>
                            <label>Add Photo</label><br />
                            <input type="file" /><br />
                            <Button variant='contained'>Save Changes</Button>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className='page-div'>
                <p>1</p>
                <img src={'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                <p>Lorem Ipsum is simply dummy text </p>
                <Button style={{ margin: '5px',width:'200px',height:'40px' }}
                variant="outlined" >
                    <DeleteIcon />
                    Delete
                </Button>
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

export default PageSettings;