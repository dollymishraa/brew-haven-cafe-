import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Heart, MessageSquare, Share2, ThumbsUp, Image } from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    author: 'Aria Chen',
    avatar: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 22, 2026',
    text: "Just finished a 4-hour session of Gloomhaven at Brew Haven. The Private Room is absolutely perfect for long campaigns. The Honey Latte kept us going all night! 🎲☕",
    image: '/images/KLing_93876a3d-314b-4e98-a3d5-ce2cbcf75db0.jpg',
    likes: 42, comments: 8, tag: 'Game Review',
  },
  {
    id: 2,
    author: 'Marcus Webb',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'June 18, 2026',
    text: "Won the Chess Tournament last Saturday! Incredible experience — the atmosphere here is unmatched. Already signed up for next month. Thanks Brew Haven! ♟️🏆",
    image: '/images/KLing_43ef3a36-cbf4-400f-9a34-895621e2d275.jpg',
    likes: 68, comments: 15, tag: 'Tournament',
  },
  {
    id: 3,
    author: 'Sophie Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    date: 'June 15, 2026',
    text: "Tried the Truffle Mushroom Pizza for the first time while playing Wingspan. Best combo ever. The whole evening was absolutely magical. Brew Haven is a hidden gem! 🍕",
    image: null,
    likes: 31, comments: 5, tag: 'Food Review',
  },
  {
    id: 4,
    author: 'James Park',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: 'June 10, 2026',
    text: "Brought my family for the first time — kids immediately fell in love with Dixit, and my partner and I discovered Azul. This place has something for everyone.",
    image: '/images/KLing_db66913b-c5a1-4000-b620-68db0594d069.jpg',
    likes: 55, comments: 11, tag: 'Family',
  },
];

interface PostLikes { [key: number]: boolean }

export default function CommunityPage() {
  const [liked, setLiked] = useState<PostLikes>({});
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ text: '', tag: 'General' });
  const [posts, setPosts] = useState(initialPosts);
  const toast = useToast();

  const toggleLike = (id: number) => setLiked(l => ({ ...l, [id]: !l[id] }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.text.trim()) return;
    const post = {
      id: Date.now(), author: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      text: newPost.text, image: null, likes: 0, comments: 0, tag: newPost.tag,
    };
    setPosts(p => [post, ...p]);
    setNewPost({ text: '', tag: 'General' });
    setShowForm(false);
    toast.show('Post Shared!', 'Your experience has been shared with the community.', '🌟');
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">The Brew Haven Community</div>
          <h1 className="serif">Share Your <span className="gradient-text">Experience</span></h1>
          <p>Reviews, game nights, discoveries — share what makes Brew Haven special to you.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Post button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
            <button className="btn-primary" onClick={() => setShowForm(v => !v)}>
              <MessageSquare size={16} />
              Share Experience
            </button>
          </div>

          {/* New Post Form */}
          {showForm && (
            <div className="card" style={{ padding: 24, marginBottom: 24, animation: 'scaleIn 0.3s ease' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Share Your Experience</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                  <select
                    className="input-field"
                    value={newPost.tag}
                    onChange={e => setNewPost(p => ({ ...p, tag: e.target.value }))}
                    style={{ marginBottom: 10 }}
                  >
                    {['General', 'Game Review', 'Food Review', 'Tournament', 'Family', 'Events'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <textarea
                    className="input-field"
                    rows={4}
                    placeholder="What was your experience? Which game did you play? What coffee did you have?..."
                    value={newPost.text}
                    onChange={e => setNewPost(p => ({ ...p, text: e.target.value }))}
                    required
                    style={{ resize: 'vertical' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button type="button" className="btn-ghost">
                    <Image size={14} /> Add Photo
                  </button>
                  <div style={{ flex: 1 }} />
                  <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                  <button type="submit" className="btn-primary">Post</button>
                </div>
              </form>
            </div>
          )}

          {/* Posts feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {posts.map(post => (
              <div key={post.id} className="community-post-card">
                <div className="post-header">
                  <img src={post.avatar} alt={post.author} className="post-avatar" loading="lazy" />
                  <div>
                    <div className="post-author">{post.author}</div>
                    <div className="post-date">{post.date}</div>
                  </div>
                  <span className="badge badge-accent" style={{ marginLeft: 'auto' }}>{post.tag}</span>
                </div>
                <div className="post-text">{post.text}</div>
                {post.image && <img src={post.image} alt="Community post" className="post-img" loading="lazy" />}
                <div className="post-actions">
                  <button className={`post-action${liked[post.id] ? '' : ''}`} onClick={() => toggleLike(post.id)} style={{ color: liked[post.id] ? 'var(--accent)' : undefined }}>
                    <Heart size={14} fill={liked[post.id] ? 'var(--accent)' : 'none'} />
                    {post.likes + (liked[post.id] ? 1 : 0)} likes
                  </button>
                  <button className="post-action">
                    <ThumbsUp size={14} />{post.comments} comments
                  </button>
                  <button className="post-action" onClick={() => toast.show('Link Copied!', 'Post link copied to clipboard.', '🔗')}>
                    <Share2 size={14} />Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
