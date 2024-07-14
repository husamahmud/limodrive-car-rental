import Filter from '@/components/Filter'

export default function CarsOperations() {
  return (
    <div className="flex gap-4">
      <Filter
        placeholder="Vehicle type"
        filterField="type"
        options={[
          { label: 'All', value: 'all' },
          { label: '4x4', value: '4x4' },
          { label: 'Limusine', value: 'limusine' },
          { label: 'Sports', value: 'sports' },
        ]}
      />

      <Filter
        placeholder="Vehicle make"
        filterField="make"
        options={[
          { label: 'All', value: 'all' },
          { label: 'BMW', value: 'bmw' },
          { label: 'Ferrari', value: 'ferrari' },
          { label: 'Ford', value: 'ford' },
          { label: 'Mercedes', value: 'mercedes' },
        ]}
      />

      <Filter
        placeholder="Vehcile color"
        filterField="color"
        options={[
          { label: 'All', value: 'all' },
          { label: 'Black', value: 'black' },
          { label: 'Grey', value: 'grey' },
          { label: 'Orange', value: 'orange' },
          { label: 'Red', value: 'red' },
        ]}
      />
    </div>
  )
}
