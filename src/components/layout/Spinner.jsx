import spinner from 'assets/spinner.gif';

export function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading"
        width={180}
        className="text-center mx-auto"
      />
    </div>
  );
}
