import Link from 'next/link';

export default function Investigate() {
  return (
    <div className="container">
      <h1>Where would you like to start your investigation?</h1>
      <div className="choices">
        <Link href="/deck"><button className="button">Deck</button></Link>
        <Link href="/captains-cabin"><button className="button">Captain's Cabin</button></Link>
        <Link href="/engine-room"><button className="button">Engine Room</button></Link>
        <Link href="/lower-deck"><button className="button">Lower Deck</button></Link>
        <Link href="/crows-nest"><button className="button">Crow's Nest</button></Link>
      </div>
    </div>
  );
}
