export async function hostPage() {
	const iconTop = await fetch("http://localhost:3000/Data/Home.json");
	const header = await iconTop.json();
	return header.icons;
}
export async function main() {
	const one = await fetch("http://localhost:3000/Data/Home.json");
	const use = await one.json();
	return use.mainOne;
}
export async function second() {
	const secon = await fetch("http://localhost:3000/Data/Home.json");
	const use = await secon.json();
	return use.second;
}
export async function images() {
	const image = await fetch("http://localhost:3000/Data/Home.json");
	const use = await image.json();
	return use.contentImage;
}
export async function airCover() {
	const data = await fetch("http://localhost:3000/Data/Home.json");
	const useD = await data.json();
	return useD.AirCover;
}
export async function HostAir() {
	const host = await fetch("http://localhost:3000/Data/Home.json");
	const see = await host.json();
	return see.superHost;
}
export async function ApartAirbnb() {
	const apart = await fetch("http://localhost:3000/Data/Home.json");
	const ap = await apart.json();
	return ap.airbnbApart;
}
export async function question() {
	const all = await fetch("http://localhost:3000/Data/Home.json");
	const res = await all.json();
	return res.question;
}
export async function footer(){
	const end = await fetch("http://localhost:3000/Data/Home.json");
	const use = await end.json();
	return use.footer;
}
export async function stack(){
	const ip = await fetch("http://localhost:3000/Data/Home.json");
	const ips = await ip.json();
	return ips.userplace;
}