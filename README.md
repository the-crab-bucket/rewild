# rewild

Host a static site from your own computer with no hassle.

## Running the Server App

1. Install NPM using the preferred method for your OS. Make sure to use the latest version of Node (`23.8` as of 2/18/25).
1. From the root of the project, run `npm install`.
1. Then do `npm run dev`. 

## Docker Development / Manual Hosting (auto setup WIP)

First, install Docker Desktop at https://docs.docker.com/get-started/get-docker/.

We use a Makefile to make common commands easy. 
- Run local Jekyll build: `make dev-b`
    - This will run the website locally and automatically reload any changes. you can access it from your browser at `localhost:4000`.
- Run internet server: `make prod-b`
    - This will build the static Jekyll app, and mount the Nginx server to the `_site/` directory containing the bundled static files.
 
### Cloudflare
Unfortunately, the easiest way to expose your local site to the internet is through a Cloudflare Tunnel.
Ideally we would not lock into a single vendor, especially a megacorpo, but this is it for now!

The tunnel connects an isolated port on your computer to Cloudflare's network. 
Of course, to be on the web, you must buy and set up your domain credentials with both Cloudflare and whoever you bought it from. 
I suggest buying your domain name from Cloudflare for simplicity, but I have domains on Namecheap and GoDaddy as well.
- [Cloudflare Dashboard](https://one.dash.cloudflare.com/)
- [Cloudflare tunnel docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/)

1. Click on Cloudflare Dashboard above.
2. Click on the horizontal menu bars in the top left
3. Scroll down and click on "Zero Trust"
4. Again in the menu, click on "Networks" -> "Tunnels"
5. Click the "Create a tunnel" button.
6. Select Cloudflared.
7. Name your tunnel something simple and relevant.
8. Copy the connector command and get the token.
9. Save the token to your `.env` file 
    - `TUNNEL_TOKEN=<token>`
10. From the tunnels page, copy the "Tunnel ID." It should look like a bunch of numbers and letters. This is distinctly different from the "Connector ID."
11. Go back to the main dashbaord, click on your site, go to the DNS tab in the side bar and click "Records."
12. Delete the existing type "A" record
13. Click "Add Record"
14. Select CNAME from the "Type" dropdown, put "@" in the "Name" field, and put "your_id_from_earlier.cfargotunnel.com" as the target. (should look something like "497dcba3-ecbf-4587-a2dd-5eb0665e6880.cfargotunnel.com")


## Other Helpful Links
- [Electron tutorial](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)
- [Jekyll docs](https://jekyllrb.com/docs/)
