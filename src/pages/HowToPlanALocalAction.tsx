import { Panel } from "../components/Panel";
import { Link } from "react-router-dom";
import * as UI from "@mui/material";
import { Demands } from "../components/Demands";

export const HowToPlanALocalAction = () => {
  return (
    <Panel title="How to plan a local action">
      <p>
        <strong>
          Aim of the action: We want to put pressure on MPs and demand that
          they:
        </strong>
      </p>
      <Demands />

      <p>
        <strong>Step 1: Find your crew</strong>
      </p>
      <ul>
        <li>
          <p>Get some friends and supporters together</p>
        </li>
        <li>
          <p>Share the call out with local groups</p>
        </li>
        <li>
          <p>Have a meeting to decide your target and plan your action</p>
        </li>
      </ul>
      <p>
        <strong>Step 2: Decide your target </strong>
      </p>
      <ul>
        <li>
          Find your local MP (you may be able to find their details{" "}
          <a
            href="https://members.parliament.uk/members/commons"
            target="_blank"
          >
            here
          </a>
          )
        </li>
        <li>
          Research their office address, and do a recce
          <ul>
            <li>
              <p>Camera/security</p>
            </li>
            <li>
              <p>General layout</p>
            </li>
            <li>
              <p>Opening and closing times (also check weekdays vs weekend)</p>
            </li>
            <li>
              <p>How will people get there on the day?</p>
            </li>
            <li>
              <p>Is there a good meeting point nearby?</p>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Step 3: Plan your action</strong>
      </p>
      <ul>
        <li>
          <p>What time will the action happen?</p>{" "}
        </li>
      </ul>
      <ul>
        <li>
          Find people to do these roles on the day
          <ul>
            <li>
              <p>
                Legal observers: bring{" "}
                <a href="https://greenandblackcross.org/guides/bustcard">
                  bust cards
                </a>{" "}
                and give a{" "}
                <a href="https://greenandblackcross.org/guides/">
                  legal briefing
                </a>{" "}
                (if needed){" "}
              </p>
            </li>
            <li>
              <p>
                Giving out flyers -{" "}
                <UI.Link component={Link} to="/flyers-to-download">
                  see template here
                </UI.Link>
                , and holding banners{" "}
              </p>
            </li>
            <li>
              <p>
                Facilitators: explain aim of the action at the beginning, and
                facilitate discussions if decisions need to be made by the group
                (e.g. leaving the building){" "}
              </p>
            </li>
            <li>
              <p>Photographer/videographer </p>
            </li>
            <li>
              <p>Social media </p>
            </li>
            <li>
              <p>
                Media and press contact: sending out press release, and being a
                point of contact{" "}
              </p>
            </li>
            <li>
              Police and security liaison: If you choose to, a couple of people
              in your group can take on this role. Their aim is to de-escalate
              and buy time. Good strategies might include; telling the police
              that you will ask everyone in the group when they want to leave,
              and taking as long as possible to do that.{" "}
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          Get your kit together: do a shout to see what you can borrow
          <ul>
            <li>
              <p>Rainproofing: Let people know to bring their raincoats</p>
            </li>
            <li>
              <p>Megaphone/speaker</p>
            </li>
            <li>
              <p>Chant list</p>
            </li>
            <li>
              <p>Banners and placards</p>
            </li>
            <li>
              <p>
                Flyers{" "}
                <UI.Link component={Link} to="/flyers-to-download">
                  see template here
                </UI.Link>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Step 4: Promote your action</strong>
      </p>
      <ul>
        <li>Share with local groups, and your networks</li>
      </ul>
      <p>
        <strong>Step 5: Media and comms</strong>
      </p>
      <ul>
        <li>
          <p>
            Update the press release for your local context{" "}
            <UI.Link component={Link} to="/actions">
              see template here
            </UI.Link>
            .
          </p>
        </li>
        <li>
          <p>Invite trusted journalist to join you on the day</p>
        </li>
        <li>
          <p>Make a list of local journalists to contact on the day</p>
        </li>
        <li>
          <p>Think about what will make a good photo, at your action!</p>
        </li>
      </ul>
      <p>
        <strong>Step 6: Tell us about your action!</strong>
      </p>
      <ul>
        <li>
          Email us at{" "}
          <a href="mailto:londonpalestineaction@gmail.com">
            londonpalestineaction@gmail.com
          </a>{" "}
          and tell us which MP you are organising an action for
        </li>
      </ul>
      <p>
        <strong>On the day!</strong>
      </p>
      <ul>
        <li>
          <p>Send the press release &amp; photos to your media list</p>
        </li>
        <li>
          <p>
            Share your photos with the hashtag <strong>#GazaDayOfAction</strong>{" "}
            <strong>#PalestineSolidarity</strong>{" "}
            <strong>#StopArmingIsrael</strong>
            &amp; email them to{" "}
            <a href="mailto:londonpalestineaction@gmail.com">
              londonpalestineaction@gmail.com
            </a>
          </p>
        </li>
      </ul>
    </Panel>
  );
};
