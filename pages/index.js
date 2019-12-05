import Layout from '../components/Layout';
import MediaBar from '../components/MediaBar';
import LandingContent from '../components/LandingContent';

const Index = () => (
	<Layout>
		<div className="box">
			<MediaBar />
			<LandingContent />
		</div>
		{/* <h1>Welcome to the do whatever the fuck you want page page!</h1>
		<p>Do whatever you want with this template!</p>
		<p>Ok!</p> */}
		<style jsx>{`
			.box {
				display: flex;
				height: 100%;
			}
		`}</style>
	</Layout>
);

export default Index;
