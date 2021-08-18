import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/notes'
import Create from './pages/create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import {green} from '@material-ui/core/colors'
import Layout from './components/layout'
import Update from "./pages/update";
import TableView from "./pages/tableView";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50"
    },
    secondary: green
  },
  typography: {
    fontFamily: 'Nunito',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
      <ThemeProvider theme={theme} >
        <Router >
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create" >
                <Create />
              </Route>
              <Route path="/update" >
                <Update />
              </Route>
              <Route path="/table" >
                <TableView/>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
  );
}

export default App;
