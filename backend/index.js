const express = require("express")
const cors = require("cors");
const axios = require("axios")

// project id : 861c45d9-1231-4ee8-9edb-a31e4d0ec817
// project secret : d655212f-624a-4ec7-b5f5-8ed8a451a87b

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "PRIVATE-KEY": "d655212f-624a-4ec7-b5f5-8ed8a451a87b" } }
        )
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
});

app.listen(3001);