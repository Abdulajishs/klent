import find from "../assets/details/find.png";
import engage from "../assets/details/engage.png";
import route from "../assets/details/route.png";
import coach from "../assets/details/coach.png";
const Detail = () => {
  return (
    <div className="my-10 ">
      <div className="flex flex-col justify-center items-center my-5">
        <h3>Everything You Need to Run Your Sales Process.</h3>
        <h3>In One Platform.</h3>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 h-[500px]">
        <div className="h-[400px] w-[300px] flex flex-col gap-2 group">
          <div className="flex flex-col p-6 bg-gradient-to-br from-violet-400 to-violet-100 rounded-lg h-[300px] w-[300px]">
            <h4 className="my-3 text-gray-50">Find</h4>
            <img
              src={find}
              alt="find "
              className={
                "h-[300px] max-w-[250px] transition-transform duration-300 group-hover:scale-110"
              }
            />
          </div>
          <p>
            Get accurate emails and direct-dial mobile numbers for your ideal
            prospects, verified using the Waterfall Enrichment Model
          </p>
          <h6>EXPLORE SALES INTELLIGENCE</h6>
        </div>
        <div className="h-[400px] w-[300px]  flex flex-col gap-2 group">
          <div className="flex flex-col p-6 bg-gradient-to-br from-violet-400 to-violet-100 rounded-lg  h-[300px] w-[300px]">
            <h4 className="my-3 text-gray-50">Engage</h4>
            <img
              src={engage}
              alt="engage "
              className="h-[300px] max-w-[250px] transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p>
            Reach out to prospects across email, phone, LinkedIn, WhatsApp and
            SMS. Follow-up consistently and systematically
          </p>
          <h6>EXPLORE MULTI-CHANNEL OUTREACH </h6>
        </div>
        <div className="h-[400px] w-[300px]  flex flex-col gap-2 group">
          <div className="flex flex-col p-6 bg-gradient-to-br from-violet-400 to-violet-100 rounded-lg h-[300px] w-[300px] ">
            <h4 className="my-3 text-gray-50"> Route</h4>
            <img
              src={route}
              alt="route "
              className="h-[300px] max-w-[250px] transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p>
            Turn every interested website visitor into a booked meeting. Assign
            the right lead to the right rep on availability, form answers.
          </p>
          <h6>EXPLORE LEAD ROUTING</h6>
        </div>
        <div className="h-[400px] w-[300px]  flex flex-col gap-2 group">
          <div className="flex flex-col p-6 bg-gradient-to-br from-violet-400 to-violet-100 rounded-lg h-[300px] w-[300px] ">
            <h4 className="my-3 text-gray-50">Coach</h4>
            <img
              src={coach}
              alt="coach "
              className="h-[300px] max-w-[250px] transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p>
            Automatically record, transcribe and analyze every sales
            conversation. Coach reps to adopt the strategies.
          </p>
          <h6>EXPLORE CONVERSATION INTELLIGENCE</h6>
        </div>
      </div>
    </div>
  );
};

export default Detail;
