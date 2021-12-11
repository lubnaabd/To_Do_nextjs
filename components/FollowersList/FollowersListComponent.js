import Link from 'next/link'
import styles from "./FollowersList.module.css";

function FollowersListComponent({followers}) {

    return (

        <div className={styles.followerslistContainer}>
            <div>
                {followers.map((follower, index) => (
                    <div className={styles.followerItem} data-testid={`follower-card-${index}`} key={`${index}`}>
                        <img src={follower.picture.large}/>
                        <div className={styles.followersDetails}>
                            <div className={styles.followerItemName}>
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.todoFooter}>
                <Link href="/" >Go Back</Link>
            </div>
        </div>
    );
}

export default FollowersListComponent;