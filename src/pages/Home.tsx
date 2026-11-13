import Hero from "../components/home/Hero";
import RecentlyLostPets from "../components/home/RecentlyLostPets";

export default function Home() {
  return (
    <div>
      <Hero />
      {/*Pets perdidos recentemente*/}
      <RecentlyLostPets />
      {/*Como funciona*/}
      
    </div>
  );
}
