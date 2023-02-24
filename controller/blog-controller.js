import Blog from '../model/Blog';

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: 'No blog found' });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  // console.log(req.body);
  const { title, description } = req.body;
  const blogID = req.params.id;

  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogID, { title, description });
    //     console.log(blog, "blog value");
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    res.status(500).json({ message: 'unable to update the blog' });
  }
  return res.status(200).json({ blog });
};

export const getByID = async (req, res, next) => {
  const blogID = req.params.id;

  let blog;
  try {
    blog = await Blog.findById(blogID);
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: 'blog not found' });
  }
  return res.status(200).json({ blog });
};

export const deleteByID = async (req, res, next) => {
  const blogID = req.params.id;
  let blog;

  try {
    blog = await Blog.findByIdAndRemove(blogID);
  } catch (err) {
    console.log(err);
  }
  if(!blog){
	return res.status(500).json({message:"unable to delete"})
  }
  return res.status(200).json({mesage:"blog deleted" })
};
