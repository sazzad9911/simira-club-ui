import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './css/MyProfile.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux'
import {postData, url,convertDate} from '../action'
import app from './../firebase';
import { getAuth,signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const MyProfile = (props) => {
    const user = useSelector(state => state.User)
    const [Name,setName]= React.useState()
    const [Phone,setPhone]= React.useState()
    const [Email,setEmail]= React.useState()
    const [Gender,setGender]= React.useState()
    const [BirthDay,setBirthDay]= React.useState()
    const [Location,setLocation]= React.useState()
    const [Error,setError]= React.useState()
    const auth = getAuth(app)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        if(user){
            setName(user[0].name)
            setPhone(user[0].phone)
            setEmail(user[0].email)
            setGender(user[0].gender)
            let date=new Date(user[0].birth_day)
            date=date.getFullYear()+"-"+((date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1))+"-"+(date.getDate()>9?date.getDate():'0'+date.getDate())
            setBirthDay(date)
            setLocation(user[0].address)
        }
    },[user])
    const updateData=(key,value) => {
        postData(url +'/updateData',{
            auth:auth.currentUser,
            tableName: 'user',
            columns: [key],
            values:[value],
            condition:'uid='+"'"+auth.currentUser.uid+"'"
        }).then(data => {
            console.log(data)
        })
    }
    return (
        <div style={{marginTop:'100px',marginBottom:'100px'}} className='MyProfileBody'>
            <div className='MyProfileDiv'> 
                <div className='MyProfileText'>
                    <h3 style={{width:'100%',textAlign:'center'}}>My Profile</h3>
                    <h4><span>{user && user[0].membership_type?user[0].membership_type.toUpperCase():'NON'}
                    </span> MEMBERSHIP</h4>
                </div>
                
                <div className='MyProfile-all_text'>
                    
                <div className='MyProfileBox'>
                        <div className={Name?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>

                            <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" fillRule="evenodd" d="M7.06466 9.38902C7.06466 5.73528 10.0375 2.76416 13.6912 2.76416C17.3433 2.76416 20.3144 5.73528 20.3144 9.38902C20.3144 13.0411 17.3433 16.0139 13.6912 16.0139V17.2324L13.6417 16.0139C10.0034 16.0002 7.05272 13.0308 7.06466 9.38902ZM13.6363 18.4496H13.691C18.6878 18.4496 22.7511 14.3863 22.7511 9.38946C22.7511 4.39266 18.6878 0.327637 13.691 0.327637C8.69245 0.327637 4.62742 4.39266 4.62742 9.38434C4.61036 14.3675 8.64978 18.4342 13.6363 18.4496ZM2.73291 27.9276C2.73291 25.4616 6.41908 24.2124 13.6907 24.2124C20.9607 24.2124 24.6451 25.4735 24.6451 27.9617C24.6451 30.4277 20.9607 31.6769 13.6907 31.6769C6.41908 31.6769 2.73291 30.4157 2.73291 27.9276ZM0.173096 27.9278C0.173096 34.237 10.3476 34.237 13.6907 34.237C19.4913 34.237 27.205 33.5868 27.205 27.962C27.205 21.6528 17.0339 21.6528 13.6907 21.6528C7.88844 21.6528 0.173096 22.303 0.173096 27.9278Z" fill="black" />
                            </svg>
                        </div>
                        <div className={Name?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <input onBlur={e=>{
                                updateData('name',e.target.value)
                            }} value={Name} onChange={e=>{
                                setName(e.target.value)
                            }} className={Name?'MyProfileInput':'MyProfileInputs'} type='text' placeholder='Name' />
                        </div>
                    </div>
                    <div className='MyProfileBox'>
                        <div className={Phone?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.68233 5.97232C4.68563 5.97232 4.60321 6.05803 4.49937 6.16022C4.10049 6.54757 3.2747 7.35358 3.26645 9.03978C3.25327 11.3985 4.8043 15.778 12.2727 23.2447C19.7065 30.6752 24.0794 32.2443 26.443 32.2443H26.4776C28.1638 32.2361 28.9682 31.4087 29.3572 31.0114C29.4759 30.8895 29.5715 30.8004 29.639 30.7444C31.2807 29.0928 32.1214 27.8632 32.1131 27.0753C32.1016 26.271 31.1011 25.3199 29.7181 24.0046C29.2781 23.5859 28.8001 23.131 28.2957 22.6266C26.9886 21.3228 26.3408 21.5453 24.9167 22.0464C22.947 22.737 20.2438 23.6766 16.044 19.4751C11.8375 15.2719 12.7787 12.5721 13.4677 10.6024C13.9655 9.17824 14.1929 8.52881 12.8842 7.22007C12.3716 6.7091 11.9117 6.22451 11.4881 5.77947C10.181 4.4048 9.23819 3.41088 8.43878 3.39935H8.42559C7.63606 3.39935 6.40974 4.24327 4.67409 5.97891C4.67904 5.97397 4.68068 5.97232 4.68233 5.97232V5.97232ZM26.4447 34.7164C22.3372 34.7164 16.9819 31.4462 10.5256 24.9931C4.0445 18.5137 0.76936 13.142 0.794084 9.0262C0.808919 6.30653 2.23469 4.91373 2.77038 4.39122C2.7984 4.35661 2.894 4.26265 2.92697 4.22969C5.29061 1.8644 6.8845 0.908391 8.47015 0.926522C10.3113 0.951247 11.6217 2.32921 13.2799 4.07475C13.6903 4.5066 14.1353 4.97636 14.6314 5.47085C17.0379 7.87734 16.3523 9.84045 15.8017 11.4162C15.2018 13.1354 14.6825 14.6188 17.7912 17.7275C20.9032 20.8362 22.3866 20.317 24.0992 19.712C25.6766 19.1615 27.6348 18.4725 30.0446 20.879C30.5325 21.3669 30.9956 21.807 31.4225 22.2141C33.1763 23.8806 34.5609 25.1975 34.5839 27.0436C34.6037 28.6177 33.6477 30.2215 31.2874 32.5835L30.2424 31.8747L31.1258 32.7384C30.6033 33.2741 29.2122 34.7015 26.4909 34.7164H26.4447Z" fill="black" />
                            </svg>


                        </div>
                        <div className={Phone?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <input onBlur={e=>{
                                updateData('phone',e.target.value)
                            }} value={Phone} onChange={e=>{
                                setPhone(e.target.value)
                            }} className={Phone?'MyProfileInput':'MyProfileInputs'} type='number' placeholder='Phone' />
                        </div>
                    </div>

                    <div className='MyProfileBox'>
                        <div className={Email?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>
                            <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.1746 29.5127H10.3555H10.3329C8.49648 29.5127 6.86462 28.8554 5.61455 27.6069C4.16473 26.162 3.36572 24.0855 3.36572 21.7609V10.6972C3.36572 6.19793 6.30725 2.93262 10.3587 2.93262H26.1746C30.2261 2.93262 33.1676 6.19793 33.1676 10.6972V21.7609C33.1676 24.0855 32.3702 26.162 30.9188 27.6069C29.6687 28.8554 28.0384 29.5127 26.2004 29.5127C26.197 29.5127 26.1933 29.5123 26.1897 29.5119C26.183 29.5112 26.1767 29.5105 26.1746 29.5127ZM3.90846 29.3197C5.62247 31.0273 7.84231 31.9294 10.3279 31.9294H10.3586H26.1745H26.2003C28.6907 31.9294 30.9122 31.0257 32.6246 29.3197C34.5335 27.4156 35.5838 24.7318 35.5838 21.7613V10.6976C35.5838 4.89345 31.5388 0.516602 26.1745 0.516602H10.3586C4.99422 0.516602 0.949219 4.89345 0.949219 10.6976V21.7613C0.949219 24.7318 1.99953 27.4156 3.90846 29.3197ZM15.259 17.9174C16.1579 18.6294 17.2324 18.9854 18.3101 18.9854C19.391 18.9854 20.4736 18.6262 21.3789 17.9077L28.5378 12.0891C29.0549 11.667 29.1338 10.9067 28.7134 10.3896C28.2913 9.87088 27.531 9.79033 27.0122 10.214L19.8662 16.0229C18.9529 16.7479 17.6754 16.7479 16.7685 16.0294L9.54997 10.2108C9.03126 9.79355 8.27091 9.87571 7.85046 10.3928C7.43323 10.9115 7.51378 11.6735 8.0341 12.0923L15.259 17.9174Z" fill="black" />
                            </svg>

                        </div>
                        <div className={Email?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <input onBlur={e=>{
                                updateData('email',e.target.value)
                            }} value={Email} onChange={e=>{
                                setEmail(e.target.value);
                            }} className={Email?'MyProfileInput':'MyProfileInputs'} type='Email' placeholder='Email' />
                        </div>
                    </div>

                    <div className='MyProfileBox'>
                        <div className={Gender!='Gender'?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>
                            <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.51241 32.5936C11.7676 37.8423 20.9607 37.1844 26.0459 31.1241C30.8465 25.4029 30.2698 16.9125 24.9273 11.564L30.4477 4.98502L31.0583 10.8864C31.1341 11.6194 31.7914 12.1709 32.5264 12.1183C33.2613 12.0657 33.7957 11.4289 33.7198 10.6959L32.7778 1.59065C32.702 0.857717 32.0447 0.306194 31.3097 0.35879L22.1792 1.0122C21.4442 1.06479 20.9099 1.70159 20.9857 2.43453C21.0615 3.16747 21.7188 3.71899 22.4538 3.6664L28.3716 3.2429L22.8511 9.82189C16.6562 5.48932 8.1946 6.39567 3.39393 12.1169C-1.69123 18.1771 -0.742748 27.3448 5.51241 32.5936ZM23.9697 29.382C19.8167 34.3313 12.3088 34.8686 7.20024 30.5821C2.09172 26.2955 1.31711 18.8083 5.4701 13.859C9.62309 8.90967 17.131 8.37238 22.2395 12.6589C27.3481 16.9455 28.1227 24.4327 23.9697 29.382Z" fill="black" />
                            </svg>

                        </div>
                        <div className={Gender!='Gender'?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <select onChange={(e)=>{
                                setGender(e.target.value)
                                updateData('gender',e.target.value)
                            }} value={Gender?Gender:'Gender'} className='MyProfileSelect'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Gender">Gender</option>
                            </select>
                        </div>
                    </div>

                    <div className='MyProfileBox'>
                        <div className={BirthDay?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>
                            <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.396 7.06527C23.396 7.78265 23.9782 8.36488 24.6956 8.36488C25.413 8.36488 25.9952 7.78265 25.9952 7.06527V5.43975C27.8059 5.59412 29.2719 6.19461 30.2746 7.20029C31.4165 8.34395 31.9918 10.0074 31.9849 12.1475V12.894H3.39355V12.1475C3.39355 8.11808 5.51563 5.76496 9.39785 5.43902V7.06529C9.39785 7.78267 9.98008 8.36489 10.6975 8.36489C11.4148 8.36489 11.9971 7.78267 11.9971 7.06529V5.3999H23.396V7.06527ZM25.9952 2.83217V1.3626C25.9952 0.645212 25.413 0.0629883 24.6956 0.0629883C23.9782 0.0629883 23.396 0.645212 23.396 1.3626V2.7998H11.9971V1.36261C11.9971 0.645229 11.4148 0.0630046 10.6975 0.0630046C9.98008 0.0630046 9.39785 0.645229 9.39785 1.36261V2.83277C4.06443 3.20465 0.794189 6.70042 0.794189 12.1466V27.8268C0.794189 33.6819 4.46081 37.3191 10.361 37.3191H25.0171C30.9174 37.3191 34.584 33.7322 34.584 27.9585V12.15C34.5926 9.33769 33.7384 6.9932 32.1147 5.36263C30.6273 3.87215 28.5257 3.00549 25.9952 2.83217ZM3.39355 15.4933V27.8277C3.39355 32.274 5.86801 34.7208 10.3612 34.7208H25.0173C29.5105 34.7208 31.9849 32.3191 31.9849 27.9593V15.4933H3.39355ZM24.0957 20.9603C24.0957 21.6776 24.6849 22.2599 25.4022 22.2599C26.1196 22.2599 26.7018 21.6776 26.7018 20.9603C26.7018 20.2429 26.1196 19.6606 25.4022 19.6606H25.3866C24.6693 19.6606 24.0957 20.2429 24.0957 20.9603ZM17.7128 22.2599C16.9954 22.2599 16.4062 21.6776 16.4062 20.9603C16.4062 20.2429 16.9798 19.6606 17.6972 19.6606H17.7128C18.4302 19.6606 19.0124 20.2429 19.0124 20.9603C19.0124 21.6776 18.4302 22.2599 17.7128 22.2599ZM8.69897 20.9603C8.69897 21.6776 9.28986 22.2599 10.0072 22.2599C10.7246 22.2599 11.3069 21.6776 11.3069 20.9603C11.3069 20.2429 10.7246 19.6606 10.0072 19.6606H9.99165C9.27427 19.6606 8.69897 20.2429 8.69897 20.9603ZM25.4022 28.9942C24.6849 28.9942 24.0957 28.412 24.0957 27.6946C24.0957 26.9772 24.6693 26.395 25.3866 26.395H25.4022C26.1196 26.395 26.7018 26.9772 26.7018 27.6946C26.7018 28.412 26.1196 28.9942 25.4022 28.9942ZM16.4062 27.6946C16.4062 28.412 16.9954 28.9942 17.7128 28.9942C18.4302 28.9942 19.0124 28.412 19.0124 27.6946C19.0124 26.9772 18.4302 26.395 17.7128 26.395H17.6972C16.9798 26.395 16.4062 26.9772 16.4062 27.6946ZM10.0072 28.9942C9.28986 28.9942 8.69897 28.412 8.69897 27.6946C8.69897 26.9772 9.27427 26.395 9.99165 26.395H10.0072C10.7246 26.395 11.3069 26.9772 11.3069 27.6946C11.3069 28.412 10.7246 28.9942 10.0072 28.9942Z" fill="black" />
                            </svg>


                        </div>
                        <div className={BirthDay?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <input onBlur={e=>{
                                updateData('birth_day',e.target.value)
                            }} onChange={(e) =>setBirthDay(e.target.value)} value={BirthDay} 
                            className={BirthDay?'MyProfileInput':'MyProfileInputs'} 
                            type='date' placeholder='Date of birth' />
                        </div>
                    </div>

                    <div className='MyProfileBox'>
                        <div className={Location?'MyProfileBoxIcon':'MyProfileBoxIconEmail'}>
                            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5166 15.3569C3.5166 8.81885 8.78741 3.49756 15.2663 3.49756C21.7451 3.49756 27.0159 8.81885 27.0159 15.3569C27.0159 23.6739 17.2263 31.7785 15.2663 32.212C13.3062 31.7803 3.5166 23.6756 3.5166 15.3569ZM0.905762 15.3566C0.905762 25.1654 12.1437 34.8297 15.2664 34.8297C18.3892 34.8297 29.6271 25.1654 29.6271 15.3566C29.6271 7.37726 23.1848 0.88623 15.2664 0.88623C7.34805 0.88623 0.905762 7.37726 0.905762 15.3566ZM12.222 15.249C12.222 13.5675 13.5884 12.2011 15.2682 12.2011C16.9479 12.2011 18.3144 13.5675 18.3144 15.249C18.3144 16.9288 16.9479 18.2935 15.2682 18.2935C13.5884 18.2935 12.222 16.9288 12.222 15.249ZM9.61088 15.2487C9.61088 18.3681 12.1488 20.9042 15.2681 20.9042C18.3874 20.9042 20.9254 18.3681 20.9254 15.2487C20.9254 12.1277 18.3874 9.58977 15.2681 9.58977C12.1488 9.58977 9.61088 12.1277 9.61088 15.2487Z" fill="black" />
                            </svg>

                        </div>
                        <div className={Location?'MyProfileInputBox':'MyProfileInputBoxs'}>
                            <input onBlur={e=>{
                                updateData('address',e.target.value)
                            }} value={Location} onChange={(e)=>{
                                setLocation(e.target.value)
                            }} className={Location?'MyProfileInput':'MyProfileInputs'} 
                            type='text' placeholder='Location' />
                        </div>
                    </div>
                    <div className='MyProfileTexts'>
                        <Link to='/ForgetPassword' style={{
                            marginTop: '20px',
                            color:'#000000',
                            textDecoration: 'none',
                            marginRight: '10px',
                            fontWeight: '600'
                        }}>Forgot password?</Link>
                        <Link to='/LogIn2' style={{
                            marginTop: '20px',
                            color:'red',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>Change password</Link>
                    </div>
                    <Button onClick={()=>{
                        signOut(auth).then(() => {
                       window.location.href='/'
                     }).catch((error) => {
                       // An error happened.
                     });
                    }} style={{
                        backgroundColor:'#FC444B',
                        color:'white',
                        width: '100%',
                        height: '60px',
                        borderRadius: '30px'
                    }}>
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;