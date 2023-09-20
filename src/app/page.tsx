import { getAge } from "@/utils";
import { toWords } from "number-to-words";

export default function Page() {
  let ageText = toWords(getAge(new Date("09/30/2002")));
  ageText = ageText.charAt(0).toUpperCase() + ageText.slice(1);

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <p className="text-center text-xl">
        {/* {ageText} year old software engineer from the United Kingdom. */}
        Software engineer from the United Kingdom.
      </p>
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                rel="external noopener noreferrer"
                href="https://carrynaloxoneuk.uk"
                aria-label="Carry Naloxone"
                className="font-semibold"
              >
                Carry Naloxone
              </a>
            </td>
            <td>Find nearby naloxone suppliers and access information on how to use naloxone.</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
