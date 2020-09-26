import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
// Components
import NavBar from './components/NavBar';
import Carrito from './components/Carrito';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';

function App() {

	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					<NavBar/>
					<Switch>
						{/* Routes */}
						<Route path="/" exact component={Home} />
						<Route path="/" exact component={ItemList} />
						<Route path="/categories/:categoryId" component={ItemList} />
						<Route path="/item/:id" component={ItemDetailContainer} />
						<Route path="/cart" component={Carrito} />
					</Switch>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;
