import Directory from "../../components/Directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "SUV",
      imageUrl: "https://www.cnet.com/a/img/resize/0fbc6b23ca9c0d23b7012e8065e5b0d9b92c0870/hub/2022/04/19/c934f364-c5b4-41a4-979b-00af31bfb9eb/hyundai-tucson-1080p.jpg?auto=webp&fit=crop&height=528&width=940",
    },
    {
      id: 2,
      title: "Sedan",
      imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/New_Volkswagen_sedan_for_India.jpg?size=1200:675",
    },
    {
      id: 3,
      title: "Hatchback",
      imageUrl: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2022/10/2023-Corolla-Hatch_001H-1500x900.jpg",
    },
    {
      id: 4,
      title: "Trucks",
      imageUrl: "https://pattersontruckstop.com/wp-content/uploads/sites/60/2022/07/2016-GMC-Sierra-2.jpeg",
    },
    {
      id: 5,
      title: "Accessories",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/04/47/14/64/1000_F_447146424_LnIjEuxK7ienMpSOc1uuiMf0dFmBX5tb.jpg",
    },
  ];

  return (
    <div>
      <Directory categories = {categories} />;
      <Outlet/>
    </div>
  );
};

export default Home;