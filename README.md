# pufETH Conversion Rate Tracker

This project tracks the pufETH conversion rate. The backend is built using `sqlite3` + `sequelize` + `nodemon`, and it tracks the rate using a cron job. The frontend is built with `Next.js` and `react-query`.

## Structure

- `frontend`: The frontend code, built with Next.js.
- `backend`: The backend code, which handles the fetching and tracking of the pufETH conversion rate.

### Environment Setup

1. Rename `.env.example` to `.env`.
2. In the `.env` file:
   - Provide your Infura API key inside `RPC_URL`.
   - Provide the pufETH contract address as `PUFETH_CONTRACT_ADDRESS`.

### Backend Setup

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Start the backend server with `nodemon` (for automatic reloading during development):

   ```bash
   yarn dev
   ```

3. The backend will start a server that tracks the conversion rate using a cron job. It also exposes an endpoint to fetch the latest rate.

### Frontend Setup

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Start the frontend development server:

   ```bash
   yarn dev
   ```

3. The frontend will display the current conversion rate and its historical data as a chart.

### Development Thoughts & Future Considerations

- **Event-driven approach**: If we want to move towards an event-driven model, we could integrate WebSockets for real-time updates.
- **Microservice architecture**: We could consider splitting the backend into a separate repository, containerized with Docker, and use a more robust database like PostgreSQL for scalability.
- **Frontend deployment**: Set up deployment for the frontend application, possibly using Vercel or a similar platform.
- **Deployment**: Automate the deployment process using CI/CD pipelines to deploy the backend and frontend together or independently.
- **Tests**: Add unit, integrational and e2e tests

Feel free to contribute, suggest improvements, or refactor sections as necessary.
