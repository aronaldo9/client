import { useAuth } from "@/hooks";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Info() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center pb-16">
      <button className="bg-gray-300 rounded-lg w-20 h-20 mb-5 flex items-center justify-center">
        <FontAwesomeIcon icon={faUser} className="text-black text-3xl" />
      </button>
      <h3 className="text-xl mb-1">{user.username}</h3>
      <h4 className="font-bold mb-3">{user.email}</h4>
      <p className="text-sm">
        Miembro desde:{" "}
        {DateTime.fromISO(user.createdAt, { locale: "es" }).toFormat("DDD")}
      </p>
    </div>
  );
}
