import Title from "@/components/core/text/title";
import FavoriteCard from "@/app/hobbies/games/favorite-card";
import Container from "@/components/core/containers/container";
import Text from "@/components/core/text/text";

const FAVORITES = [
  312520,
  632470,
  238210,
  602960,
  427520,
  632360,
  282140,
  70,
  4000,
  220,
  620,
  823500
];

const Favorites = () => {
  return (
    <Container responsive fill reverse className="px-5 py-20">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <Title bold>Favorites</Title>
        <Text>
          These are some of my favorite games of all time. Each one of these brings something nice to the table, that
          being the game mechanics, the story, the world.
        </Text>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-5">
            {FAVORITES.map((appid, i) => (
              <FavoriteCard key={i} appid={appid} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Favorites;