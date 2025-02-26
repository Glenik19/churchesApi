import { createConnection } from '$lib/db/mysql';

// The GET function is called when a GET request is made to the endpoint
export async function GET() {

    let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM church');
    await connection.end();

	// Return a 200 OK response with all pizzerias as JSON
	return new Response(JSON.stringify(rows), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
}

// The POST function is called when a POST request is made to the endpoint
// It expects a JSON body with the data of the new pizzeria
export async function POST({ request }) {

	let connection = await createConnection();
    const data = await request.json();
	
    if(!data.name || !data.city || !data.year) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }
    await connection.execute('INSERT INTO church (name, city, year) VALUES (?,?,?)', [data.name, data.city, data.year]);

    await connection.end();

	return new Response(JSON.stringify(data), {
		status: 201,
		headers: { 'content-type': 'application/json' }
	});
}