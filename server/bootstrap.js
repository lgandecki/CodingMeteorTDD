Meteor.startup(function() {
	if (Meteor.users.find().count() == 0) {
		var _users = [
			{name:"User",email:"user@thebrain.pro",roles:[], password: "password"},
			{name:"Admin",email:"admin@thebrain.pro",roles:['admin'], password: "password"}
		];

		_users.forEach(function (user) {
			var _id = Accounts.createUser({
				email: user.email,
				password: user.password,
				profile: { name: user.name }
			});

			if (user.roles.length > 0) {
				Roles.addUsersToRoles(_id, user.roles);
			}
		});
	};
});