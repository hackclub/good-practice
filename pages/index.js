import Head from "next/head";
import Image from "next/image";

// Reusable Divider component
const Divider = () => {
  return <div style={{width: "100%", height: "1px", backgroundColor: "#000", marginTop: "32px"}}></div>;
};

export default function Home() {
  // Create text on a circular path
  const createCircularText = () => {
    const text = "By Thomas Stubblefield ";
    const characters = [];
    const radius = 60;
    
    // Calculate angle per character for even distribution
    const angleStep = 360 / text.length;
    
    for (let i = 0; i < text.length; i++) {
      // Calculate angle for this character
      const angle = i * angleStep;
      
      // Calculate position on the circle
      const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
      const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
      
      characters.push(
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
            transformOrigin: "0 0",
            height: "20px",
            width: "20px",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          {text[i]}
        </div>
      );
    }
    
    return characters;
  };

  return (
    <>
      <Head>
        <title>Good Practice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html, body {
            background-color: #FFFDF7;
            color: #000;
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes rotate-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          
          .rotating-circle {
            animation: rotate 20s linear infinite;
          }
          
          .dotted-circle {
            position: absolute;
            top: 7.5%;
            left: 7.5%;
            transform: translate(-50%, -50%);
            width: 85%;
            height: 85%;
            border-radius: 50%;
            border: 2px dotted black;
            animation: rotate-reverse 15s linear infinite;
          }
          
          .stamp-container {
            position: relative;
            width: 150px;
            height: 150px;
          }
          
          .center-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            z-index: 2;
          }
          
          .center-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </Head>
      <main style={{ display: "flex", backgroundColor: "#FFFDF7", minHeight: "100vh", height: "100%", justifyContent: "center", alignItems: "center"}}>
        <div style={{ width: "100%", padding: 8, height: "100%", maxWidth: "800px", minHeight: "100vh", margin: "0px" }}>
          {/* HStack layout with title/description VStack and stamp */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            {/* Title and description VStack */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "#F4BB06", lineHeight: "100%", WebkitTextStroke: "1px #000", fontSize: "64px", margin: 0 }}>Good Practice</h1>
              <p style={{ fontSize: "16px", lineHeight: "100%", marginTop: "8px", fontStyle: "italic", color: "#000" }}>a short reading on time.</p>
            </div>
            
            {/* Stamp component */}
            <div className="stamp-container">
              <div className="rotating-circle" style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0
                }}>
                  {createCircularText()}
                </div>
              </div>
              
              {/* Dotted inner circle that rotates in opposite direction */}
              <div className="dotted-circle"></div>
              
              {/* Center image that doesn't rotate */}
              <div className="center-image">
                <img src="./stampCenter.png" alt="Stamp Center" />
              </div>
            </div>
          </div>

          <Divider />
          {/* section 1 */}
          <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
               <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                 Hey, my name is Thomas! I've organized some adventures (<a href="https://youtu.be/ufMUJ9D1fi8?feature=shared" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Trail</a>, <a href="https://youtube.com/playlist?list=PLbNbddgD-XxH0TDS6qFynB6-YnWZU5Fhc&feature=shared" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Juice</a>, and now currently <a href="https://youtu.be/vcIS_-wvPZU?feature=shared" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Neighborhood</a>) and I've been thinking about how two people can both spend a BUNCH of time making a project and one will undergo immense growth while the other won't make something they're proud of. Even they spend the same amount of time, the difference is one of them is spending time doing good practice and the other is spending time simply to make time pass.
               </p>
               <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "16px", color: "#000" }}>Good practice involves</p>
               <ul style={{ fontSize: "18px", lineHeight: "1.8", paddingLeft: "24px", color: "#000" }}>
                 <li>being able to measure your progress</li>
                 <li>experiencing good feedback loops (so as you progress it feels good)</li>
                 <li>learning from those who are more experienced than you</li>
                 <li>trying new things just a little beyond what you're comfortable with</li>
               </ul>
           </div>

           <Divider />
           {/* section 2 */}
           <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
                <h2 style={{ color: "#F4BB06", WebkitTextStroke: "0.5px #000", fontSize: "36px", marginBottom: "16px" }}>Measurability</h2>
                <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "0px", color: "#000" }}>
                  As time passes, if we have no goal or way to measure our progress, we may find that we're not using our time wisely. It's kinda vibe-coding but instead of vibe-coding it's like vibe-living, we're not paying attention to why we're doing the things that we're doing, rather we're just going through the motions, and often when going through the motions we find the result doesn't satisfy us. So, it's good to start with what you want to achieve.<br/><br/>
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "0px", color: "#000" }}>
                  In order to be able to measure your progress, you must have a goal. For Juice, I had the goal of running my own pop-up cafe in Shanghai, China! In order to make that happen, everyone participating in the program needed to make great games that we could showcase at the cafe for visitors to come and experience.<br/><br/>
                </p>
                
                <div style={{ marginBottom: "16px" }}>
                  <img 
                    src="./dailyStretches.png" 
                    alt="Metabase dashboard showing daily stretches" 
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      border: "1px solid #ddd", 
                      borderRadius: "4px" 
                    }} 
                  />
                </div>
                
                <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                  That's not very easy to measure, so we broke it down one step further to be time spent per day in the program and I had a graph where I could see how many hours Hack Clubbbers were spending "Juicing" (working on their Juice games). The idea is that by 100 hours, everyone would have a functioning game and we'd be able to travel to China and run this Cafe! Because I knew what to measure and how that connected to my goal, I was able to run many experiments that helped us ultimately achieve our goal of running the cafe & a bunch of Hack Clubbers making incredible games.<br/><br/>
                  Whatever you're measuring, whether it's user count, time users spend on your software, likes on a post, features implemented in your game or pcb, you need a goal to connect these measurements to. Some ideal world that will make this metric something meaingful to you.<br/><br/>
                  If you have a traditional numeric measure, I'd recommend <a href="https://metabase.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Metabase</a>! It's an open-source tool you can self-host to create graphs and dashboards of your progress, that's what I used for Juice.<br/><br/>
                  I don't want you to get the wrong idea that this approach only works for events or for measuring hours. I think this same approach works for measuring signups for your app, recipes made in a cooking app, or number of daily active users for your game.
                </p>
           </div>

           <Divider />
           {/* section 3 */}
           <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
               <h2 style={{ color: "#F4BB06", WebkitTextStroke: "0.5px #000", fontSize: "36px", marginBottom: "16px" }}>Feedback Loops</h2>
               <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                 If you want to do something consistently (to develop a habit), you should make it fun, feedback loops are the way to do that. 
                 Feedback loops are what make games fun. You do some action and then you get some positive or negative result and it feels satisfying. For coding projects, there are many different types of feedback loops that you can build into your hacking process.<br/><br/>
                 One example of a feedback loop is you implement some new feature and then you post about it on some social platform, the Slack, or to a close friend, and they try it out and you have someone real use the thing you made.<br/><br/>
                 I'm a strong proponent of this approach, but sometimes you may not get any interaction. A better way is to collect the emails of people who are interested in your product and once you release an update, boom you can email all of them immediately and get people using your new features asap! You can own the distribution channel if you collect the emails rather than needing to rely on some other platform.<br/><br/>
                 I'd recommend <a href="https://loops.so/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Loops</a>! It's a minimal tool that allows you to send a bunch of emails to people who signup for your product. Every time you ship a new update, you can within minutes send out an email to everyone who has tried your product!
               </p>
               
               <div style={{ marginTop: "24px", marginBottom: "16px" }}>
                 <img 
                   src="./hackbnb.png" 
                   alt="Hackbnb platform interface" 
                   style={{ 
                     maxWidth: "100%", 
                     height: "auto", 
                     border: "1px solid #ddd", 
                     borderRadius: "4px" 
                   }} 
                 />
               </div>
               
               <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "8px", fontStyle: "italic", color: "#000" }}>
                 This is Hackbnb, a little social platform I made a couple days ago for seeing who's moving to the Neighborhood homes over the summer. It was really satisfying to launch and within an hour 50 Hack Clubbers booked a stay. It made those two hours of coding feel super satisfying, it was a good feedback loop.
               </p>
           </div>

           <Divider />
           {/* section 4 */}
           <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
               <h2 style={{ color: "#F4BB06", WebkitTextStroke: "0.5px #000", fontSize: "36px", marginBottom: "16px" }}>Learning from those who are more experienced than you</h2>
               <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                 What makes communities like Hack Club magical is that you're not alone. You're surrounded by people who know more than you and who are happy to help you. I remember when I first started learning how to code there was a person named Yofu from the Netherlands and he was somehow on a public call for like 24/7 and any time I had an issue, I would just pop in that call and ask for some questions. That's how I learned how to code my first project, just asking for help!<br/><br/>
                 I'm not implying this strategy is only for beginners. It's for all hackers, because no matter how experienced you are, there's always people who have more experience, especially in a specific domain.<br/><br/>
                 The beautiful thing about Neighborhood this Summer is you don't have to get lucky and find some Yofu-like character on a random discord server, instead you have roommates that are always there to help you. We're not alone in this adventure, we always have each other!
               </p>
           </div>

           <Divider />
           {/* section 5 */}
           <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
               <h2 style={{ color: "#F4BB06", WebkitTextStroke: "0.5px #000", fontSize: "36px", marginBottom: "16px" }}>Trying new things just a little beyond what you're comfortable with</h2>
               <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                 When we do things that are just a bit more than what we're capable of doing, we feel a challenge. That challenge is what makes building projects fun! If we already knew how to build our project, then it would be rather mundane and boring. If we want to do great work and do it consistently over time, we need to consistently challenge ourselves to do things beyond what we're capable of doing today.
               </p>
           </div>
           <Divider />
           {/* section 6 */}
           <div style={{ marginTop: "32px", maxWidth: "90%", marginBottom: "32px" }}>
           <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "8px", color: "#000" }}>
                   I remember when I first got interest in UI/UX design (way before I had interest in coding), I found this <a style={{textDecoration: "underline"}} href="https://www.dailyui.co/">DailyUI challenge</a>. It actually helped me a lot in learning how to make UI design. It had all these components, it was measuarble that I was continuing my habit, I got a good feedback loop when I posted my designs on Dribbble and discord servers and people interacted with it, I learned from more experienced designers that pointed out  the flaws in my designs, and I was every day making a new type of interface that I hadn't made before. By the end of the 100 days, I was a UI/UX designer!
           </p>
           </div>
          </div>
        </main>
      </>
  );
}
