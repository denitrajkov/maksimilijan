import Banner from "@/components/Banner";
import WineDetail from "@/components/WineDetail";

const WineDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const response = await fetch(
      `https://maksimilijan-wine--room.glitch.me/wines/${params.id}`
    );
    const wineData = await response.json();

    return (
      <>
        <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />

        {wineData && (
          <div>
            <WineDetail
              image={wineData.image}
              name={wineData.name}
              color={wineData.color}
              alchocol={wineData.alchocol}
              vintage={wineData.vintage}
              price={wineData.price}
              description={wineData.description}
            />
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching wine data:", error);
  }
};

export default WineDetails;
