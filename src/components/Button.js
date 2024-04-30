function Button({ children, onClick }) {
    return (
        <button
            className="bg-cyan-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
