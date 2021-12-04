import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css"

interface UserProps {
    dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
    const {dataUsers} = props;
    const router = useRouter();

    console.log(dataUsers);
    return (
        <Layout pageTitle="user Page">
            {dataUsers.map(user => {
                // menginisialkan dataUser dengan user
                return(
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                        {/* () => merupakan definisi functional */}
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Web: {user.website}</p>
                    <br />
                    {/* view data user */}
                    </div>
                )
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}