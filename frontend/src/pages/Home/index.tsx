import CourseCard from '~/components/CourseCard';
function Home() {
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <CourseCard
                title="Frontend"
                price={5}
                imgUrl="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/630695867_3166560830398367_211198893490798313_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmT3Aq9ppyp5wDVLM-Z_hw13FRIlYKllzXcVEiVgqWXLcb68YLPqiUX-Re-GSEiRnqigybPZs6StxVH1nHNPO-&_nc_ohc=BZtf1yKV3zYQ7kNvwEnmUwG&_nc_oc=AdrEXYtCjp2UFn9_Q1bw_ThkDdvlcMPqsyk89PShq7Msfo7TTeM6p0-NuO7PtDLp1j9fFhk8b_56lVevoj9z0FSW&_nc_zt=23&_nc_ht=scontent.fvca1-3.fna&_nc_gid=LGBykjhdD-yvRAcKtALBEg&_nc_ss=7b2a8&oh=00_Af8aZ68nf5-mziUFUqe3X2yltA-DVD-O7aByH8mGdoy6nw&oe=6A3BFBE6"
                description="This is a useful course helping you go to market, have a fantastic jobs with a high salary."
            />

            

        </div>
    );
}

export default Home;
