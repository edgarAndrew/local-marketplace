import {useEffect} from 'react'
import {getProfile} from '../../actions/user'
import { useDispatch,useSelector } from 'react-redux'
import {Backdrop,CircularProgress} from '@mui/material'

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
            <h1>My profile</h1>
        </>
    )
}
export default Profile;