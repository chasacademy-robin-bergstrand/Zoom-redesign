export default function Card({ icon, title }) {
    return (
        <div className="flex flex-col items-center text-center justify-center border border-sky-200 rounded-3xl lg:text-2xl p-2 xl:text-3xl font-bold hover:text-zoom-blue hover:border-zoom-blue hover:shadow-lg">
            {icon}
            <h3>{title}</h3>
        </div>
    );
}
