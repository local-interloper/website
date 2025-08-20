import { FiExternalLink } from "react-icons/fi";
import { GIGS } from "../data/gigs";
import ExternalLink from "~/components/extenral-link";

const GigsTable = () => (
  <table className="table w-full">
    <thead>
      <tr>
        <th>Project</th>
        <th>Client</th>
        <th>Description</th>
        <th>Link</th>
        <th>Technologies</th>
      </tr>
    </thead>
    <tbody>
      {GIGS.map(({ title, client, link, description, technologies }, i) => (
        <tr key={i}>
          <td className="text-nowrap">{title}</td>
          <td className="text-nowrap">
            {client.url ? (
              <ExternalLink label={client.name} url={client.url} />
            ) : (
              <span>{client.name}</span>
            )}
          </td>
          <td>{description}</td>

          <td>
            {link && (
              <section className="flex justify-center">
                <a className="link" target="_blank" href={link}>
                  <FiExternalLink className="text-xl" />
                </a>
              </section>
            )}
          </td>
          <td>
            <section className="flex justify-center gap-sm">
              {technologies.map((Icon, i) => (
                <Icon key={i} className="text-xl" />
              ))}
            </section>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GigsTable;
