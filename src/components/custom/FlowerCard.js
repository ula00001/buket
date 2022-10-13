import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)``;
const Image = styled("img")`
	width: 157px;
	height: 157px;
`;
const Text = styled(Typography)``;

const FlowerCard = ({ item }) => {
	console.log(item);
	return (
		<Wrapper>
			<Image src={item.imageUrl} />
			<Text></Text>
		</Wrapper>
	);
};

export default FlowerCard;
