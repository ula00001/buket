import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import Logo from "../utils/images/logo.svg";
import { topBarData } from "../data";

const Icon = styled("img")`
	display: block;
`;
const Text = styled(Typography)`
	color: #000000;
	font-size: 18px;
	font-weight: 700;
	margin: 0 20px;
`;
const TextWrapper = styled(Box)`
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin-top: 8px;
`;

const TopBar = () => {
	return (
		<Box>
			<AppBar
				sx={{
					boxShadow: "none",
					backgroundColor: "#fff",
				}}
			>
				<Toolbar>
					<Container
						maxWidth="lg"
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Icon src={Logo} />
						<TextWrapper>
							<Text> {topBarData.dis1} </Text>
							<Text> {topBarData.dis2} </Text>
							<Text> {topBarData.dis3} </Text>
							<Text> {topBarData.dis4} </Text>
							<Text> {topBarData.dis5} </Text>
						</TextWrapper>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
