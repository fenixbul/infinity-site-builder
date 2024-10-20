
# Web Interface Canister Project

This project is designed to deploy a React-based Single Page Application (SPA) to the Internet Computer using Next.js for frontend development and Motoko Canisters for backend functionality. The setup leverages DFINITY's Internet Computer and Webpack for handling the canisters and bundling.

## Project Structure

```
my-nextjs-project/
├── dfx.json
├── dfx.webpack.config.js
├── src/
│   ├── web_interface/
│   │   ├── node_modules/
│   │   ├── pages/
│   │   ├── out/
│   │   ├── .next/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── .env.example
│   │   ├── .gitignore
```

### Key Components:
- **`dfx.json`**: Defines the configuration for the canisters. It specifies the `web_interface` canister as an asset canister with the frontend entry point defined as `src/web_interface/out/index.html`.
- **`dfx.webpack.config.js`**: Custom Webpack configuration that helps manage environment variables and initializes the correct canister IDs based on the development or production environment.
- **`next.config.js`**: Next.js configuration located inside the `src/web_interface` folder. This file integrates the Webpack setup for ensuring proper environment variable handling and builds the Next.js app for deployment.
- **`pages/`**: Contains the SPA pages built with React and Next.js.

## Dependencies

### Global Dependencies
- **dfx**: DFINITY's SDK for building and deploying canisters on the Internet Computer.
- **Node.js & npm**: Used to manage the frontend project (React, Next.js, etc.).

### Local Dependencies (Inside `src/web_interface`):
- **React**: JavaScript library for building the user interface.
- **Next.js**: Framework for React applications with server-side rendering, routing, and other optimizations.
- **Webpack**: Module bundler, used for building the frontend and handling environment variables.

To install the local dependencies:
```bash
cd src/web_interface
npm install
```

## Configuration

### 1. **`dfx.json`**
This file defines the `web_interface` canister as an asset canister that serves the static frontend files.

Example `dfx.json`:
```json
{
  "canisters": {
    "web_interface": {
      "frontend": {
        "entrypoint": "src/web_interface/out/index.html"
      },
      "type": "assets",
      "source": ["src/web_interface/out"],
      "build": ["cd src/web_interface && npm run build"]
    }
  }
}
```

### 2. **`dfx.webpack.config.js`**

This file handles loading and initializing canister IDs for both local development and production. It injects the correct canister IDs into environment variables that the frontend can use.

Example usage in `next.config.js`:
```javascript
const DFXWebPackConfig = require('../../dfx.webpack.config');
DFXWebPackConfig.initCanisterIds();
const webpack = require('webpack');

const EnvPlugin = new webpack.EnvironmentPlugin({
  DFX_NETWORK: 'local'
});

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(EnvPlugin);
    return config;
  },
  output: 'export'
};
```

### 3. **`next.config.js`**

Handles Next.js configuration and integrates with the Webpack setup. It ensures that environment variables such as the canister IDs are correctly injected into the frontend.

### 4. **`.gitignore`**

The `.gitignore` file ensures that unnecessary files like `node_modules`, build artifacts (`.next` and `out` directories), environment files (`.env`), and `.dfx` directories are not tracked in version control.

## Running the Project

### 1. **Start Local Development**

To start the local development environment, follow these steps:

1. Start the DFINITY local network:
   ```bash
   dfx start --background
   ```

2. Deploy the canisters locally:
   ```bash
   dfx deploy
   ```

3. Navigate to the `src/web_interface` folder and start the Next.js development server:
   ```bash
   cd src/web_interface
   npm run dev
   ```

4. Your frontend will be running at `http://localhost:3000`, and the canisters will be accessible via the local DFINITY network.

### 2. **Deploy Canisters**

To deploy your canisters locally or on the Internet Computer, use the following commands:

- For local deployment:
  ```bash
  dfx deploy
  ```

- For production deployment:
  ```bash
  dfx deploy --network ic
  ```

## Environment Variables

The project uses environment variables to manage configurations, such as canister IDs for different environments. You can create an `.env` file in the `src/web_interface` folder to manage local environment variables. The example environment file is `.env.example`.

### Example `.env.example`:

```bash
DFX_NETWORK=local
NEXT_PUBLIC_WEB_INTERFACE_CANISTER_ID=<canister_id>
```

### Ignored Files:

- `node_modules/`
- `src/web_interface/out`
- `src/web_interface/.next`
- `src/web_interface/.env*`
- `.dfx/`
- `canister_ids.json`
- `src/declarations`
- `.DS_Store`
- `.env`

The `.gitignore` file ensures that sensitive files like environment variables and build artifacts are not tracked in version control.

## Additional Notes

- **Webpack Configuration**: The `dfx.webpack.config.js` helps with initializing canister IDs and ensuring that environment variables are passed correctly into the Next.js application.
- **Static Export**: The Next.js configuration is set to `output: 'export'`, meaning the app is built as a static site, which is suitable for hosting on an asset canister.

## Known Issues

- Ensure that `dfx` is properly configured and running when trying to start or deploy the canisters.
- Canister IDs must be properly initialized and injected into the environment variables, especially when switching between local and production environments.

## License

This project is licensed under the MIT License.
