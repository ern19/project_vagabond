
City.destroy_all
Post.destroy_all
atlanta = City.new({
    name: "Atlanta",
    photo_url: "https://i.imgur.com/VZGElRM.jpg",
    description: "Named after the fabeled city lost under the sea, Atlantis. A city forged of the spoils of the great Civil War. A city shrouded in trees and LGBT. The New York of the south.",
    posts: [

        Post.create({
            title: "eget tincidunt nibh pulvinar a.",
            content: "Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        }),
        Post.create({
            title: "ANOTEHR TITLE",
            content: " thing and thing and more things with some other things and links and a hint of panic",
        }),
        Post.create({
            title: "Everyone Calm the down",
            content: "Hands On Atlanta helps individuals, families, corporate and community groups strengthen Greater Atlanta through service at more than 400 nonprofit organizations and schools.  Hands On Atlanta volunteers are at work every day of the year tutoring and mentoring children, helping individuals and families make pathways out of poverty, improving Atlanta’s environment, and more.  Hands On Atlanta is an affiliate of the HandsOn Network, an association of 250 volunteer service organizations across 16 countries",
        })]
})

atlanta.save