import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FlowerCard from "./custom/FlowerCard";
import { flowerCatalog } from "../data";

const Wrapper = styled(Box)``;

const Flowers = () => {
	return (
		<Wrapper>
			{flowerCatalog.map((item) => (
				<FlowerCard item={item} key={item.id} />
			))}
		</Wrapper>
	);
};

export default Flowers;
