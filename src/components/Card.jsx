const Card = ({ children }) => {
    return (
        <>
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
            {children}
        </div>
        </>
    );
}
export default Card;
