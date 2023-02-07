import {useEffect} from 'react';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

export const getServerSideProps = (context) => {
    const {username} = context.params;
    console.log(context)

    return {
        test: 'test'
    }

}


const UserProfile = ({test}) => {

    useEffect(() => {
        console.log('test ssr', test)
    }, [test])


    return (
        <>
            <ProfileCard
                data={test}
                />
        </>
    )
}

export default UserProfile;