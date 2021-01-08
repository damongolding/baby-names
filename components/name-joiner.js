const NameJoiner = ({firstName, middleNames, familyName}) => {

	const names = middleNames.map( (middleName, index) => {
		if ((middleName.toLowerCase() === firstName.toLowerCase()) || middleName === "") return;
		return <li key={index}>
			{firstName} {middleName} {familyName}
		</li>
	});
	

	return(
		<ul className="mt-6">
			<li>
				<h3 className="text-2xl pb-1">
					{firstName}
				</h3>
			</li>
			{ names }
		</ul>
	)
}

export default NameJoiner;
