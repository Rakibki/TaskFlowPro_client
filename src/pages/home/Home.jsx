import Banner from "./Banner"
import Customers from "./Customers"
import Members from "./Members"
import Users from "./Users"
import WhyUse from "./WhyUse"

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyUse />
      <Users />
      <Customers />
      <Members />
    </div>
  )
}

export default Home