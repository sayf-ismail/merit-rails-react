small_co_team = Team.create(
    name: "Small Sales Dept"
)

kyle = small_co_team.users.create(
    username: "it_guy",
    name: "Kyle Katarn",
    points_to_give: 100,
    points_to_redeem: 60,
)
  
barb = small_co_team.users.create(	
    username: "hr_lady",
    name: "Barbara Bonny",
    points_to_give: 100,
    points_to_redeem: 60,
)

barb.feedposts.create(
    recipient_id: kyle.id,
    points: 10,
    message: "For great singing at Jam Night",
    gif_url: "https://media.tenor.com/images/4546731b239c6536f9760758b6bd299e/tenor.gif"
)


kyle.feedposts.create(
    recipient_id: barb.id,
    points: 15,
    message: "For agreeing with me at meetings",
    gif_url: "https://media.tenor.com/images/a44d0c84e5e535a649b16011b8d3c54c/tenor.gif"
)