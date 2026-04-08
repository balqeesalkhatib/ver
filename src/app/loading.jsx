import "./loading.css"
export default function Loading() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading posts...</p>
        </div>
    );
}