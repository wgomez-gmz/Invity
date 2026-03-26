type FirebaseStatusCardProps = {
  projectId: string;
};

export function FirebaseStatusCard({
  projectId,
}: FirebaseStatusCardProps) {
  const isConfigured = projectId.length > 0;

  return (
    <article className="panel status-panel">
      <div className="status-header">
        <span className={`status-dot ${isConfigured ? "ready" : "pending"}`} />
        <h3>Estado de Firebase</h3>
      </div>

      <p>
        {isConfigured
          ? `Proyecto detectado: ${projectId}`
          : "Aun faltan variables en tu archivo .env para conectar Firebase."}
      </p>

      <code className="inline-code">
        src/services/firebase/client.ts
      </code>
    </article>
  );
}
