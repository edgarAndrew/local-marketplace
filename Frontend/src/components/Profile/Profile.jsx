import {useEffect} from 'react'
import {getProfile} from '../../actions/user'
import { useDispatch,useSelector } from 'react-redux'
import {Backdrop,CircularProgress,Typography} from '@mui/material'
import {currentURL} from '../../axios'
import ItemCard from "../UI/Card";
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()

    const { message, loading, error, profile } = useSelector(
        (state) => state.user
    );

    useEffect(()=>{
        dispatch(getProfile())
    },[])

    if (loading)
        return (
        <Backdrop open={true}>
            <CircularProgress />
        </Backdrop>
        );
  else if(profile)
    return(
        <>
            <div className='container'>
                <div className='info'>
                    <div>
                        <img src={`${currentURL}/${profile.user.profile_pic}`} alt="avatar" />
                    </div>
                    <div>
                        <Typography variant='h6'>{profile.user.name}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {profile.user.phone}
                        </Typography>
                    </div>
                </div>
                <div className='products'>
                    <Typography variant="h5" fontWeight={600}>
                        Postings
                    </Typography>
                    <div>
                        {profile.products.map((prod) => (
                            <ItemCard prod={prod} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;