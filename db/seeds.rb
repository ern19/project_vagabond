
City.destroy_all
Post.destroy_all
atlanta = City.new({
    name: "Atlanta",
    photo_url: "https://i.imgur.com/VZGElRM.jpg",
    description: "Named after the fabeled city lost under the sea, Atlantis. A city forged of the spoils of the great Civil War. A city shrouded in trees and LGBT. The New York of the south.
                Stop moving here... We full",
    posts: [
        Post.create({
            title: "Little Five Points.",
            content: "Have you ever wanted to boost yourself esteem? Hate your parents a little less. Well then wonder around Little 5 points, weave in and out of 'train kids' busking and beggin for money, cigarettes and booze. Hit up one of the Crystal shops and align your chakras or something and buy a 'water-pipe'. Pop on in to Rag-O-Rama for some smelly vintage clothes shopping. Go to the Porter and try one of their 20,000 beers."
        }),
        Post.create({
            title: "Atlanta Underground",
            content: " Do you like urban decay? well you're in the right place. Look at all the abandon stuff that lies in the caverns that were once a bustling shopping mall. Requirements: Bullet proof vest. Bravery. Bravado."
                         
        }),
        Post.create({
            title: "The Georgia Aquarium",
            content: "You know what one of my favorite smells is .... fish smell! Get ready to be enveloped by the stench and surrouded by thousands of pushy tourists, blasted with commercials at the 'sea lion show' The perfcet All American afternoon",
        })]
})
atlanta.save
sanFranscisco = City.new({
    name:"San Franscisco",
    photo_url:"https://i.imgur.com/oZOgL6Z.jpg",
    description:" Welcome to the most expensive city in America..... Get out",
    posts:[
        Post.create({
            title: " Lombard Street.",
            content:" It's a curvy street with bushes in the middle, drive down it....go like 3 M.P.H..",
        }),
        Post.create({
            title:" The golden Gate Bridge",
            content:"It's a bridge, its beautiful. Unless theres fog.",
        }),
        Post.create({
            title:"The full House 'House'",
            content:" Mary Kate and Ashley. And *phew* That beautiful creature that is John Stamos, ohh la la. They all lived in this house that just so happens to be a real house with a real live family. except this family is rich and the house is like 5 million dollars. So go sit on their stoop and be creepy cuz you're a 90's geek. Also, all the houses look somewhat identical so good luck trying to figure out which is which.",
        })]
})
sanFranscisco.save

london = City.new({
        name: "London",
        photo_url:"https://i.imgur.com/mLs8nHo.jpg",
        description: "It's a really old city in England with lots of history, lost in the fog.",
        posts: [
            Post.create({
                title: "Big Ben",
                content:"16-storey Gothic clocktower and national symbol at the Eastern end of the Houses of Parliament",
            }),
            Post.create({
                title:"Tower of London",
                content: "Centuries of bloody history around a medieval castle, home to Crown Jewels and iconic Beefeaters.",
            }),
            Post.create({
                title:"The Shard",
                content:"87-floor glass skyscraper with a jagged peak, with restaurants, offices, hotel and viewing platform."
            })]
})
london.save