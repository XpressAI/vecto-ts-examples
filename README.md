<p align="center">
<a href="https://www.vecto.ai/">
<img src="https://user-images.githubusercontent.com/68586800/192857099-499146bb-5570-4702-a88f-bb4582e940c0.png" width="300"/>
</a>
</p>
<p align="center">
  <a href="https://docs.vecto.ai/">Docs</a> •
  <a href="https://www.xpress.ai/blog/">Blog</a> •
  <a href="https://discord.com/invite/wtYbXvPPfD">Discord</a>

<br>

Welcome to the Vecto TypeScript Tutorials!
This repository is a series of examples that guides you with your first TypeScript Vecto project.

For more information on the tutorials and Vecto API usage, visit our [documentation page](https://docs.vecto.ai/).

## Installation

```
npm install @xpressai/vecto-client
```

## Setting Up a Node.js Environment with TypeScript for Vecto Application


<details>
  <summary><b>You can skip this if you have already setup your Environment</b></summary>

#### 1. Install Node.js
First, you need to install Node.js. Download it from the [Node.js official website](https://nodejs.org/en/download/). It is recommended to download the LTS (Long Term Support) version.

#### 2. Create a Working Directory
Create a new directory on your system where you'll be developing your Vecto application. For example, let's call it `hello_vecto_app`.

#### 3. Initialize Your Node.js Project
Open your system's terminal or command prompt, navigate to the `hello_vecto_app` directory, and run the following command:
```bash
npm init -y
```
This command will create a `package.json` file in your directory, which is used to manage the project dependencies.

#### 4. Install TypeScript
To add TypeScript to your project, run the following command:
```bash
npm install typescript --save-dev
```
This command installs TypeScript as a development dependency in your project.


#### 5. Create a TypeScript Configuration File
Create a `tsconfig.json` file in your project root to configure TypeScript options. You can generate a default `tsconfig.json` file with this command:
```bash
npx tsc --init
```

#### 6. Install Required Packages
Finally, install the necessary Node.js packages. In the `hello_vecto_app` directory, run the following commands:
```bash
npm install @xpressai/vecto-client
```


If you've followed up to this point, you should have successfully set up your workspace for your Vecto application!

## Creating a Vector Space and `Usage` Level Token

To start ingesting data to a vector space, you will need a new vector space and vector space token. 

1. Launch the Vecto login page at [Vecto Login](https://app.vecto.ai/). Enter your *Username* and *Password* then proceed by clicking Sign In. 

2. Next, click on `Vector Spaces` in the menu bar and select the *New Vector Space* option. Give it a name, for example `ts-ingest-tutorial`. Next, we get to select a `vectorization model`. Given our intent to work with both images and text, the [CLIP](https://github.com/openai/CLIP) model is an ideal choice. Wrap it up by clicking the `Create Vector Space` button. To view the specifics of your Vector Space, simply click on its name in the Vector Spaces list. Remember to jot down your Vector Space ID; we'll be needing it soon.

3. To interact with our vector space, we need a unique Vector Space authentication token. Start by clicking on your username to expose the **Tokens** tab. Give it the token name as `ts-ingest-tutorial-token`. For our initial activities with this vector space, a `USAGE` access token will suffice. It grants us read-write privileges for our specific Vector Space. Having selected the `ts-ingest-tutorial` Vector Space we previously crafted, proceed by clicking `Create User Token`. 

Remember, the token will only be displayed once, so keep it safe! We'll need it for the upcoming steps.

<div>
<img src="https://docs.vecto.ai/img/docs/user-guide/Hello_world/login_vecto.gif"/>
</div>

As always, it is important to keep your token safe. A common practice is to set the token in an .env file or export it as a variable.

</details>
