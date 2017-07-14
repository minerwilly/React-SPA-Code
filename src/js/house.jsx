import React from 'react';
import preload from '../data/house.json';

const House = () => (
	<div className="house-page">
		{/* <h1>This is House page</h1> */}
		<div className="houses">
			{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> preload json data */}
			{/* {preload.houses.map( house => <h3>{house.code}</h3> )} */}
			{preload.houses.map( house => (
				<div className="show-real-estate" key={house.id}>
					<section>
						<ul>
							<li>
								{`${house.code}`}
							</li>
							<li>
								{`${house.squareMeters}`}
							</li>
							<li>
								{`${house.area}`}
							</li>
							<li>
								{`${house.location}`}
							</li>
							<li>
								{`${house.price}`}
							</li>
							<li>
								<img src={`/data/img/${house.image}`} alt={`${house.code}`} />
							</li>
							<li>
								{`${house.note}`}
							</li>
						</ul>
					</section>
				</div> 
			))}
		</div>
	</div>
);

export default House;