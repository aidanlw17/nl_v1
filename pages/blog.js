import Layout from '../components/Layout';
import BlogView from '../components/BlogView';
import matter from 'gray-matter';

export default function Blog(props) {
	return (
		<Layout>
			<BlogView posts={props.allPosts}/>
		</Layout>
	);
}

Blog.getInitialProps = async function() {
	const posts = (context => {
		const keys = context.keys();
		const values = keys.map(context);
		const data = keys.map((key, index) => {
			const slug = key
				.replace(/^.*[\\\/]/, '')
				.split('.')
				.slice(0, -1)
				.join('.');
			const value = values[index];
			const document = matter(value.default);
			return {
				document,
				slug
			}
		});
		return data
	})(require.context('../posts', true, /\.md$/))

	return {
		allPosts: posts 
	}
}
