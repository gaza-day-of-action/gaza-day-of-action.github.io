import { Panel } from "../components/Panel";
import { Demands } from "../components/Demands";

export const HowToTakePartInThePhoneBlockade = () => {
  return (
    <Panel title="How to take part in the phone blockade">
      <p>
        <strong>
          Step 1: Find your MP’s phone number, in the{" "}
          <a href="https://members.parliament.uk/members/commons">
            MP’s directory
          </a>
        </strong>
      </p>
      <p>
        <strong>Step 2: Use the script below to call them.</strong>
      </p>
      <p>
        You might need to give your name and postcode, to show you are a
        constituent{" "}
      </p>
      <p>Talking points: </p>
      <ul>
        <li>
          <p>
            I am a constituent, and I am horrified by both the Israeli attacks
            on Gaza and the complicity of the UK government{" "}
          </p>
        </li>
        <li>
          <p>
            Describe what you are seeing in Gaza: bombardment, white phosphorus,
            people killed and injured, attacks on medics and journalists,
            expulsion order, neighbourhoods destroyed, a siege that has cut off
            water and fuel, a medical crisis, explicit calls for genocide from
            Israeli officials, ethnic cleansing. A continuation of longstanding
            occupation and apartheid{" "}
          </p>
        </li>
        <li>
          <p>
            UK politicians should be upholding human rights and international
            law, designed to protect everybody. Instead,
            <strong>
              we have seen unwavering support for Israel’s bombing campaign from
              both the UK government and the opposition
            </strong>
            . Our elected politicians are cheering on clear breaches of
            international law, with shameful endorsements of genocidal policy
            and rhetoric, justifying war crimes in the name of “Israel’s right
            to self-defence”.{" "}
          </p>
        </li>
        <li>
          <p>
            What has your MP said? Have they endorsed Israeli war crimes? Have
            they stayed silent?{" "}
          </p>
        </li>
        <li>
          <p>
            The UK has a historically central and complicit role in Israel’s
            occupation and apartheid. As our elected MP, you have a chance now
            to stand for justice and human rights.{" "}
          </p>
        </li>
      </ul>
      <ul>
        <li>Will you commit to calling for:</li>
      </ul>
      <Demands />
      <p>
        <strong>Ask for a response from your MP!</strong>
      </p>
    </Panel>
  );
};
