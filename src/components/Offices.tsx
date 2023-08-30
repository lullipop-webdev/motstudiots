import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="United States" invert={invert}>
          3540 Toridon Way
          <br />
          Charlotte, NC 28277
        </Office>
      </li>
      <li>
        <Office name="Switzerland" invert={invert}>
          Rte de Meyrin 123
          <br />
          1219 Vernier, Switzerland
        </Office>
      </li>
    </ul>
  )
}
